import { ThreeMatrix4, ThreeMesh, ThreeObject3d } from '@angular-three/core';
import { Directive, Input } from '@angular/core';
import { SkinnedMesh } from 'three';

@Directive({
  selector: 'ngt-skinnedMesh',
  exportAs: 'ngtSkinnedMesh',
  providers: [{ provide: ThreeObject3d, useExisting: SkinnedMeshDirective }],
})
export class SkinnedMeshDirective extends ThreeMesh<SkinnedMesh> {
  @Input() set args(v: [boolean]) {
    this.extraArgs = v;
  }

  @Input() bindMatrix?: ThreeMatrix4;
  @Input() bindMode?: string;

  meshType = SkinnedMesh;
}
