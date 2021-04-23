// GENERATED

import { Directive, Input } from '@angular/core';
import { LatheBufferGeometry } from 'three';
import { ThreeBufferGeometry } from '../abstracts';

@Directive({
  selector: 'ngt-latheBufferGeometry,ngt-latheGeometry',
  exportAs: 'ngtLatheBufferGeometry',
  providers: [
    {
      provide: ThreeBufferGeometry,
      useExisting: LatheBufferGeometryDirective,
    },
  ],
})
export class LatheBufferGeometryDirective extends ThreeBufferGeometry<LatheBufferGeometry> {
  static ngAcceptInputType_args:
    | ConstructorParameters<typeof LatheBufferGeometry>
    | undefined;

  @Input() set args(v: ConstructorParameters<typeof LatheBufferGeometry>) {
    this.extraArgs = v;
  }

  geometryType = LatheBufferGeometry;
}