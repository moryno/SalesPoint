import React, { useMemo } from "react";
import "./Chat.scss";
import { useParams } from "react-router-dom";
import { AffiliateQueryEnums, CHAT_ROUTE } from "_constants";
import { useAuthUser, useCreateService, useGetById } from "_hooks";
import { chatService } from "_services";
import { AppBreadCrumbs } from "_lib";

const Chat = () => {
  const { id } = useParams();
  const { user } = useAuthUser();
  const { getChats, createChat } = chatService;

  const mutation = useCreateService(createChat, AffiliateQueryEnums.CHATS);

  const { isLoading, data } = useGetById(
    getChats,
    AffiliateQueryEnums.CHATS,
    id
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({
      conversationId: id,
      description: e.target[0].value,
    });
    e.target[0].value = "";
  };

  const urlToNameMap = useMemo(() => {
    return {
      [CHAT_ROUTE]: "Chats",
      [`${CHAT_ROUTE}/${id}`]: user.username,
    };
  }, [id, user?.username]);

  return (
    <div className="chat">
      <div className="container">
        <AppBreadCrumbs urlToNameMap={urlToNameMap} />
        {isLoading ? (
          "Loading"
        ) : (
          <div className="chats">
            {data?.data?.map((chat) => (
              <div
                key={chat._id}
                className={chat.userId === user?._id ? "owner item" : "item"}
              >
                <img
                  src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="chats"
                />
                <p>{chat?.description}</p>
              </div>
            ))}
          </div>
        )}
        <hr />
        <form className="write" onSubmit={handleSubmit}>
          <textarea type="text" placeholder="write a message" />
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
