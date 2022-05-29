interface FileDataAttributes {
  name: string;
  url: string;
  alternativeText: string;
}

interface FileData {
  id: string;
  attributes: FileDataAttributes;
}

interface File {
  data: FileData;
}

interface Asset {
  id: string;
  name: string;
  file: File;
}

export type { Asset };
