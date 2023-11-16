(async function () {
  let socket = io();
  let sendBtn = document.getElementById("send");
  let messageTextArea = document.getElementById("message");
  let messagesContainer = document.getElementById("messages");

  sendBtn.addEventListener("click", () => {
    sendMessage({ message: messageTextArea.value });
    messageTextArea.value = "";
  });

  async function getMessages() {
    try {
      const { data } = await axios.get("/messages");
      data.forEach(addMessages);
    } catch (error) {
      console.error(error);
    }
  }

  async function sendMessage(message) {
    axios
      .post("/messages", message)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const addMessages = (message) => {
    const msg = document.createElement("p");
    msg.innerHTML = message.message;
    messagesContainer.appendChild(msg);

    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  };

  socket.on("message", addMessages);

  await getMessages();
})();
