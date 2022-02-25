import FileUpload from '../FileUpload/fileUpload.molecule';

import {
  Title,
  HeaderContent,
  HeaderContainer,
  UploadContainer,
} from './vehicleSalesHeader.molecule.styles';

type UploadProps = {
  onFileUpload: Function;
};

function CustomerHeader({ onFileUpload }: UploadProps) {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Title>Import Vehicle Sales</Title>

        <UploadContainer>
          <FileUpload onFileUpload={onFileUpload} />
        </UploadContainer>
      </HeaderContent>
    </HeaderContainer>
  );
}

export default CustomerHeader;
