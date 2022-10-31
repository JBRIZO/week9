import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router'
import { Store } from '@ngrx/store'
import { HomeState } from '../reducers'
import { tap, first, finalize } from 'rxjs/operators'
import { HomeActions } from '../action-types'

@Injectable()
export class ProductsResolver implements Resolve<any> {

    loading = false

    constructor(private store : Store<HomeState>) {
        
    }

    resolve(route : ActivatedRouteSnapshot,
            state: RouterStateSnapshot){
                return this.store.pipe(
                    tap(() => {

                        if(!this.loading){
                            this.loading = true
                            this.store.dispatch(HomeActions.loadProducts())
                        }
                    }),
                    first(),
                    finalize(() => {
                        this.loading = false
                    })
                )
            }
}

