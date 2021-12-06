import { addDependenciesToPackageJson, logger, Tree } from '@nrwl/devkit';
import {
  COMPONENT_STORE_VERSION,
  THREE_TYPES_VERSION,
  THREE_VERSION,
} from './versions';

export default async function (tree: Tree) {
  logger.info('Initializing @angular-three/core...');

  addDependenciesToPackageJson(
    tree,
    {
      three: THREE_VERSION,
      '@ngrx/component-store': COMPONENT_STORE_VERSION,
    },
    {
      '@types/three': THREE_TYPES_VERSION,
    }
  );

  logger.info(
    'Dependencies added to package.json. Please run `npm install` or `yarn` to install the dependencies'
  );
}