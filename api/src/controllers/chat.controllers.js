import Chat from "../models/chat.model.js";
import Conversation from "../models/conversation.model.js";

export const createChat = async (req, res, next) => {
  const newChat = new Chat({
    conversationId: req.body.conversationId,
    userId: req.userId,
    description: req.body.description,
  });

  try {
    const chat = await newChat.save();

    await Conversation.findOneAndUpdate(
      {
        id: req.body.conversationId,
      },
      {
        $set: {
          readBySeller: req.isSeller,
          readByBuyer: !req.isSeller,
          lastMessage: req.body.description,
        },
      },
      {
        new: true,
      }
    );

    res.status(201).send(chat);
  } catch (error) {
    next(error);
  }
};

export const getChats = async (req, res, next) => {
  try {
    const chats = await Chat.find({ conversationId: req.params.id });
    res.status(200).send(chats);
  } catch (error) {
    next(error);
  }
};
