import { PaymentService } from "./payment.service";
import httpStatus from "http-status";
import { sendResponse } from "../../utils/sendResponse";
import { tryCatchAsync } from "../../utils/tryCatchAsync";

const createSession = tryCatchAsync(async (req, res) => {
  const result = await PaymentService.createSession(req.body);

  sendResponse({
    res,
    sendData: {
      statusCode: httpStatus.OK,
      success: true,
      message: "Pyment session created successfully",
      data: result,
    },
  });
});

export const PaymentController = {
  createSession,
};
