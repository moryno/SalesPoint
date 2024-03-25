import User from "../models/user.model.js";
import responseError from "../utils/responseError.js";

export const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (req.userId !== user._id.toString()) {
      return next(responseError(403, "You can only delete your account!"));
    }

    await User.findByIdAndDelete(req.params.id);
    res.status(200).send("Your account has been deleted succefully.");
  } catch (error) {
    return next(responseError(500, "Deleting account failed."));
  }
};
