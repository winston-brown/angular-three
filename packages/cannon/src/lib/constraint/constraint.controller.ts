// GENERATED
import {
  Controller,
  createControllerProviderFactory,
} from '@angular-three/core';
import {
  AfterContentInit,
  ContentChildren,
  Directive,
  Input,
  NgModule,
  NgZone,
  QueryList,
} from '@angular/core';
import { map } from 'rxjs';
import { NgtPhysicBodyController } from '../body/body.controller';
import { NgtPhysicConstraintStore } from './constraint.store';

@Directive({
  selector: `
    ng-container[ngtPhysicPointToPointConstraint],
    ng-container[ngtPhysicConeTwistConstraint],
    ng-container[ngtPhysicDistanceConstraint],
    ng-container[ngtPhysicHingeConstraint],
    ng-container[ngtPhysicLockConstraint]
  `,
  exportAs: 'ngtPhysicsConstraintController',
  providers: [NgtPhysicConstraintStore],
})
export class NgtPhysicConstraintController
  extends Controller
  implements AfterContentInit
{
  @Input() set options(v: Record<string, unknown>) {
    this.physicConstraintStore.set({ options: v });
  }

  @ContentChildren(NgtPhysicBodyController, { descendants: true })
  set bodies(v: QueryList<NgtPhysicBodyController>) {
    this.physicConstraintStore.connect(
      'bodies',
      v.changes.pipe(
        map((list: QueryList<NgtPhysicBodyController>) => list.toArray())
      )
    );
  }

  constructor(
    ngZone: NgZone,
    private physicConstraintStore: NgtPhysicConstraintStore
  ) {
    super(ngZone);
  }

  ngAfterContentInit() {
    this.ngZone.runOutsideAngular(() => {
      this.physicConstraintStore.init();
    });
  }

  get api() {
    return this.physicConstraintStore.api;
  }

  get controller(): Controller | undefined {
    return undefined;
  }

  get props(): string[] {
    return [];
  }
}

@NgModule({
  declarations: [NgtPhysicConstraintController],
  exports: [NgtPhysicConstraintController],
})
export class NgtPhysicConstraintControllerModule {}

export const [
  NGT_PHYSIC_CONSTRAINT_WATCHED_CONTROLLER,
  NGT_PHYSIC_CONSTRAINT_CONTROLLER_PROVIDER,
] = createControllerProviderFactory({
  watchedControllerTokenName: 'Watched PhysicConstraintController',
  controller: NgtPhysicConstraintController,
});
