import { ZodType } from "zod";

export function validate<NativeType, SchemaType extends ZodType<NativeType> = ZodType<NativeType>>(schema: SchemaType) {
  return schema;
}
