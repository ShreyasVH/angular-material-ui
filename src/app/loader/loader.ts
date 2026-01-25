import { Component, inject, DestroyRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoaderDialog } from './loader-dialog';
import { EventBusService } from '../event-bus.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {MatButtonModule} from "@angular/material/button";

@Component({
    selector: 'app-loader',
    templateUrl: './loader.html',
    imports: [MatButtonModule]
})
export class Loader {

    readonly dialog = inject(MatDialog);
    private bus = inject(EventBusService);
    private destroyRef = inject(DestroyRef);

    constructor() {
        this.bus.on('LOADER_SHOW')
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(e => {
                this.handleOpenDialog()
            });

        this.bus.on('LOADER_HIDE')
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(() => this.handleCloseDialog());
    }

    handleOpenDialog() {
        const ref = this.dialog.open(LoaderDialog, {
            panelClass: 'custom-dialog-surface',
            disableClose: true
        });

        ref.backdropClick().subscribe(() => {
            this.closeDialog()
        });
    }

    handleCloseDialog() {
        this.dialog.closeAll();
    }

    openDialog() {
        this.bus.emit({ type: 'LOADER_SHOW', payload: { text: 'Loading…' } });
    }

    closeDialog() {
        this.bus.emit({ type: 'LOADER_HIDE', payload: { text: 'Loading…' } });
    }

}
