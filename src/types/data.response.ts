import { Metadata } from './metadata.interface';

// TODO : Move to interface
export interface DataResponse<DataType> {
  data: DataType[];
  metadata: Metadata<DataType>;
}
