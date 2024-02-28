// HelpChat.js
import React, { useState } from 'react';
import { Button, Modal, Input, message } from 'antd';

const HelpChat = () => {
  const [isHelpModalVisible, setIsHelpModalVisible] = useState(false);
  const [helpMessage, setHelpMessage] = useState('');

  const handleHelpButtonClick = () => {
    setIsHelpModalVisible(true);
  };

  const handleHelpModalOk = () => {
    // Implement your logic for handling the help message
    // For now, just showing a success message
    message.success('Help message sent!');
    setIsHelpModalVisible(false);
  };

  const handleHelpModalCancel = () => {
    setIsHelpModalVisible(false);
  };

  return (
    <>
      <div className="help-chat-button" onClick={handleHelpButtonClick}>
        Help
      </div>

      <Modal
        title="Help Chat"
        visible={isHelpModalVisible}
        onOk={handleHelpModalOk}
        onCancel={handleHelpModalCancel}
      >
        <Input.TextArea
          placeholder="Type your message here..."
          rows={4}
          value={helpMessage}
          onChange={(e) => setHelpMessage(e.target.value)}
        />
      </Modal>
    </>
  );
};

export default HelpChat;
