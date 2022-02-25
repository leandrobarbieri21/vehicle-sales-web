import { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import { Container } from './fileUpload.molecule.styles';

type UploadProps = {
  onFileUpload: Function;
};

function FileUpload({ onFileUpload }: UploadProps) {
  const [selectedFile, setSelectedFile] = useState('');

  const onDrop = useCallback(
    (files) => {
      const file = files[0];

      if (!file) return;

      const fileUrl = URL.createObjectURL(file);

      setSelectedFile(fileUrl);
      onFileUpload(file);
    },
    [onFileUpload]
  );

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      accept: ['.csv'],
      onDrop,
      maxFiles: 1,
    });

  const renderDragMessage = useCallback(() => {
    if (!isDragActive) {
      return <p>Drag 'n' drop the file here, or click to select the file</p>;
    }

    return <p>Drop the file here</p>;
  }, [isDragActive, isDragReject]);

  useEffect(
    () => () => {
      // Make sure to revoke the data URIs to avoid memory leaks
      URL.revokeObjectURL(selectedFile);
    },
    [selectedFile]
  );

  return (
    <Container>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {renderDragMessage()}
      </div>
    </Container>
  );
}

export default FileUpload;
