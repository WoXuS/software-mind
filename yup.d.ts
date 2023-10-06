// yup.d.ts

import { AnyObject, BaseSchema } from "yup";

declare module "yup" {
  interface ObjectSchema<
    TShape extends AnyObject = AnyObject,
    TContext = AnyObject,
    TOut = TShape
  > extends BaseSchema<TShape, TContext, TOut> {
    dayjs(message?: string | ((params: object) => string)): this;
  }
}
