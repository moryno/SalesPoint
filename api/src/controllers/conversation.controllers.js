import Conversation from "../models/conversation.model.js";
import User from "../models/user.model.js"
import responseError from "../utils/responseError.js";

export const createConversation = async (req, res, next) => {
  const newConverstaion = new Conversation({
    id: req.isSeller ? req.userId + req.body.to : req.body.to + req.userId,
    sellerId: req.isSeller ? req.userId : req.body.to,
    buyerId: req.isSeller ? req.body.to : req.userId,
    readBySeller: req.isSeller,
    readByBuyer: !req.isSeller,
  });

  try {
    const conversation = await newConverstaion.save();
    res.status(201).send(conversation);
  } catch (error) {
    next(error);
  }
};

const getUser = async(userId) => {
    try {
      const user = await User.findById(userId);
      return user;
    } catch (error) {
      console.log(error)
    }
}

export const getConversations = async (req, res, next) => {
  try {
    const conversations = await Conversation.find(
      req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }
    ).sort({ updatedAt: -1 });
    
    const conv = await Promise.all(conversations?.map(async (conversation) => {
      const seller = await getUser(conversation.sellerId);
      const buyer = await getUser(conversation.buyerId)
  
        return (  {...conversation.toObject(), seller: seller.fullName , buyer: buyer.fullName})
    })) ;
    res.status(200).send(conv);
  } catch (error) {
    next(error);
  }
};

export const getConversation = async (req, res, next) => {
  try {
    const conversation = await Conversation.findOne({ id: req.params.id }).sort({ updatedAt: -1});

    if (!conversation)
      return next(responseError(404, "Conversation not found!"));

    res.status(200).send(conversation);
  } catch (error) {
    next(error);
  }
};

export const updateConversation = async (req, res, next) => {
  try {
    const updatedConversation = await Conversation.findOneAndUpdate(
      { id: req.params.id },
      {
        $set: {
          ...(req.isSeller ? { readBySeller: true } : { readByBuyer: true }),
        },
      },
      { new: true }
    );

    res.status(200).send(updatedConversation);
  } catch (error) {
    next(error);
  }
};
