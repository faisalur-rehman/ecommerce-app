import React from "react";
import "./Messages.css";
import itemImg from "../../../Assets/images/Capture.PNG";
import chatIcon from "../../../Assets/images/chat.PNG";
import Layout from "../../Layout/Layout";

const Messages = () => {
  return (
    <Layout>
      <div class="container-fluid">
        <div class="messages_area" style={{ padding: 80 }}>
          <h2 class="text-center">My Messages</h2>
          <div class="row">
            <div
              class="
                  messages_table
                  col-lg-10 col-md-10 col-sm-12
                  mx-auto
                  mb-4
                "
            >
              <div class="table-responsive">
                <table
                  class="
                      table table-hover table-fixed
                      fixed
                      table-bordered
                      text-center
                    "
                >
                  <thead>
                    <th width="120px">Shop Image</th>
                    <th width="120px">Shop Name</th>
                    <th width="120px">Message</th>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <img class="item-img" src={itemImg} alt="" />
                      </th>
                      <td class="align-item-center">Shop Ryad</td>
                      <td>
                        <div class="d-flex justify-content-center">
                          <img src={chatIcon} alt="" />
                          <div>
                            <span class="badge badge-danger">4</span>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <img class="item-img" src={itemImg} alt="" />
                      </th>
                      <td>Shop Ryad</td>
                      <td>
                        <div class="d-flex justify-content-center">
                          <img src={chatIcon} alt="" />

                          <div>
                            <span class="badge badge-danger">4</span>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <img class="item-img" src={itemImg} alt="" />
                      </th>
                      <td>Shop Ryad</td>
                      <td>
                        <div class="d-flex justify-content-center">
                          <img src={chatIcon} alt="" />

                          <div>
                            <span class="badge badge-danger">4</span>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="chat-box">
        <div class="container">
          <div class="chatbox">
            <div class="chatbox__support">
              <div class="chatbox__header">
                <div class="chatbox__image--header">
                  <img src="./src/img/image.png" alt="image" />
                </div>
                <div class="chatbox__content--header">
                  <h4 class="chatbox__heading--header">Chat support</h4>
                  <p class="chatbox__description--header">
                    There are many variations of passages of Lorem Ipsum
                    available
                  </p>
                </div>
              </div>
              <div class="chatbox__messages">
                <div>
                  <div class="messages__item messages__item--visitor">
                    Can you let me talk to the support?
                  </div>
                  <div class="messages__item messages__item--operator">
                    Sure!
                  </div>
                  <div class="messages__item messages__item--visitor">
                    Need your help, I need a developer in my site.
                  </div>
                  <div class="messages__item messages__item--operator">
                    Hi... What is it? I'm a front-end developer, yay!
                  </div>
                  <div class="messages__item messages__item--typing">
                    <span class="messages__dot"></span>
                    <span class="messages__dot"></span>
                    <span class="messages__dot"></span>
                  </div>
                </div>
              </div>
              <div class="chatbox__footer">
                <img src="./src/img/icons/emojis.svg" alt="" />
                <img src="./src/img/icons/microphone.svg" alt="" />
                <input type="text" placeholder="Write a message..." />
                <p class="chatbox__send--footer">Send</p>
                <img src="./src/img/icons/attachment.svg" alt="" />
              </div>
            </div>
            <div class="chatbox__button">
              <button>button</button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Messages;
