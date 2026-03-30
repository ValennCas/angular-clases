import { Component, OnInit } from '@angular/core';
import { IUser } from './models';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from './components/user-dialog/user-dialog.component';
import { UsersService } from './users.service';
import { UserDialogDeleteComponent } from './components/user-dialog-delete/user-dialog-delete.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { ErrorService } from '../../../../core/services/error.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})

export class UsersComponent implements OnInit{

  users: IUser[] = [];
  isLoading = false;

  constructor(private matDialog: MatDialog,
     private userService: UsersService,
    private snackBar: MatSnackBar,
    private errorService : ErrorService
  ){ }
  
  ngOnInit(): void {
    this.isLoading = true;

    this.userService.getUsers().subscribe({
      next:(u) => {
        this.users = u;
      },
      error: (err) => {
        const message = this.errorService.getErrorMessage(err);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: message,
          confirmButtonText: 'Cerrar'
        });
      },
      complete: () => {
        this.isLoading = false;
      }
    })
  }

  deleteUser(id: number){
    this.userService.deleteUser(id).subscribe({
      next: (u) => {
        this.users = this.users.filter(u => u.id !== id);
      },
    })
  }


openDeleteDialog(user: IUser): void {
  this.matDialog
    .open(UserDialogDeleteComponent, {
      data: user
    })
    .afterClosed()
    .subscribe({
      next: (confirm) => {
        if (confirm) {
          this.userService.deleteUser(user.id).subscribe({
            next: () => {
              this.users = this.users.filter(u => u.id !== user.id);
              this.snackBar.open('Usuario eliminado correctamente', 'Cerrar', {
                duration: 3000,
                horizontalPosition: 'end',
                verticalPosition: 'top'
              });
            },
            error: (err) => {
              const message = this.errorService.getErrorMessage(err);
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: message,
                  confirmButtonText: 'Cerrar'
                });
            },
            complete: () => {
              //.....
            }

          });
        }
      },
      error: () =>{

      },
      complete: () => {

      }
    });
}

  openDialog(user?: IUser): void {
    this.matDialog
      .open(UserDialogComponent, {
        data: user // si viene, es edición
      })
      .afterClosed()
      .subscribe({
        next: (res) => {
          if (res) {
            if (user) {
              // EDITAR
              const userToUpdate: IUser = {
                ...res,
                id: user.id,
                createdAt: new Date(),
                role: "USER"
              };
              this.userService.updateUser(userToUpdate).subscribe({
                next: (usuarioEditado) => {
                  this.users = this.users.map(u =>
                    u.id === usuarioEditado.id ? usuarioEditado : u
                  );
                },
                error: (err) => {
                  const message = this.errorService.getErrorMessage(err);
                  Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: message,
                    confirmButtonText: 'Cerrar'
                  });
                },
                complete: () => {
                }
              });
            } else {
              // CREAR
              res.createdAt = new Date();
              res.role = "ADMIN";

              this.userService.createUser(res).subscribe({
                next: (usuarioCreado) => {
                  this.users = [...this.users, usuarioCreado];
                },
                error: (err) => {
                  const message = this.errorService.getErrorMessage(err);
                  Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: message,
                    confirmButtonText: 'Cerrar'
                  });
                },
                complete: () => {

                }
              });
            }
          }
        },
        error: (err) => {
          const message = this.errorService.getErrorMessage(err);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: message,
            confirmButtonText: 'Cerrar'
          });
        }, complete: () => {

        }
      });
  }


  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'createdAt', 'actions'];

  
}
