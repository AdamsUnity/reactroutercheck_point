import React, { useState } from "react";
import { Button, Modal, Input, Rate, message } from "antd";
import { VideoCameraAddOutlined } from "@ant-design/icons";
import validator from "validator";

const CreatNewMovie = ({ setMyMovies, setRandom, memorizeMovies }) => {
  const [movieInfo, setMovieInfo] = useState({
    id: Math.random(),
    title: "",
    description: "",
    postURL: "",
    rating: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  // a function to handle our inputs
  const handleInput = (e) => {
    const { id, value } = e.target;
    setMovieInfo((preValue) => {
      return {
        ...preValue,
        [id]: value,
      };
    });
  };
  //******************************** */
  //function to handle rate
  const handleRate = (value) => {
    setMovieInfo((preValue) => ({
      ...preValue,
      rating: value,
    }));
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  // let us validate all our input before adding it to our array

  const handleOk = () => {
    //validate movie  URL
    if (!validator.isURL(movieInfo.postURL)) {
      messageApi.open({
        type: "error",
        content: "Please provide a valid image address",
      });
      return;
    }

    // let us validate movie title
    if (validator.isEmpty(movieInfo.title)) {
      messageApi.open({
        type: "error",
        content: "Please provide a Movie Title",
      });
      return;
    }

    // let us validate movie rating
    if (movieInfo.rating < 1) {
      messageApi.open({
        type: "error",
        content: "PleaseRate the Movie",
      });
      return;
    }

    // let us validate movie description
    if (validator.isEmpty(movieInfo.description)) {
      messageApi.open({
        type: "error",
        content: "Please provide the Movie description",
      });
      return;
    }
    messageApi.open({
      type: "success",
      content: "Movie Successfully added",
    });

    setMyMovies((preValue) => [movieInfo, ...memorizeMovies.myMemorizeMovies]);

    setRandom(Math.random());

    //set the input field back to zero
    setMovieInfo({
      id: Math.random(),
      title: "",
      description: "",
      postURL: "",
      rating: "",
    });

    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={showModal}
        icon={<VideoCameraAddOutlined />}
      >
        Add Movie
      </Button>
      <Modal
        title="Add New Movie"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {contextHolder}
        <div className="space-y-3">
          <Input
            value={movieInfo.postURL}
            id="postURL"
            onChange={handleInput}
            placeholder="Movie Poster URL"
          />
          <Input
            id="title"
            onChange={handleInput}
            placeholder="Movie Title"
            value={movieInfo.title}
          />
          <div className="shadow my-4 rounded-md p-2 w-fit">
            <p>Rate Movie</p>
            <Rate onChange={(value) => handleRate(value)} defaultValue={1} />
          </div>
          <Input.TextArea
            rows={4}
            placeholder="Description"
            id="description"
            onChange={handleInput}
            value={movieInfo.description}
          />
        </div>
      </Modal>
    </div>
  );
};
export default CreatNewMovie;
