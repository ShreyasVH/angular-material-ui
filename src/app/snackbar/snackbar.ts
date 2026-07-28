import { Component, inject, DestroyRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EventBusService } from '../event-bus.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-snackbar',
    templateUrl: './snackbar.html',
    imports: [MatButtonModule]
})
export class MySnackbar {
    readonly snackbar = inject(MatSnackBar);
    private bus = inject(EventBusService);
    private destroyRef = inject(DestroyRef);

    constructor() {
        this.bus.on('SNACKBAR_SHOW')
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(e => {
                this.handleOpenSnackbar(e)
            });

        this.bus.on('SNACKBAR_HIDE')
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(() => this.handleCloseSnackbar());
    }

    getPanelClass (type: string): string {
        return `${type}-snackbar`;
    }

    handleOpenSnackbar(event: any) {
        this.snackbar.open(event.payload.message, 'Close', {
            duration: 5000,
            panelClass: [this.getPanelClass(event.payload.type)]
        })
    }

    handleCloseSnackbar() {
        this.snackbar.dismiss()
    }

    openSnackbar(data: any) {
        this.bus.emit({ type: 'SNACKBAR_SHOW', payload: { message: data.message, type: data.type } });
    }

    closeSnackbar() {
        this.bus.emit({ type: 'SNACKBAR_HIDE' });
    }

}
