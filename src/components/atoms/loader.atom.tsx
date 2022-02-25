import { Code } from 'react-content-loader';

import { LoaderContainer, LoaderContent } from './loader.atom.styles';

export default function Loader() {
  return (
    <LoaderContainer>
      <LoaderContent>
        <Code />
      </LoaderContent>
    </LoaderContainer>
  );
}
