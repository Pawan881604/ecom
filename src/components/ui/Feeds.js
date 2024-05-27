import React from "react";
import { Avatar } from "@nextui-org/react";
const Feeds = () => {
  return (
    <div
      className="flex gap-4 items-center container mx-auto p-2"
      style={{ maxWidth: "1180px" }}
    >
      <div className="w-20 text-large ">
        <Avatar
          className="w-20 h-20 text-large"
          isBordered
          color="primary"
          src="https://img1.junaroad.com//assets/images/mobileNotif/img-1628498908811.jpg"
        />
        <p className="text-xs text-center p-2">MY FEED</p>
      </div>
      <div className="flex gap-4 items-center">
        <div>
          <Avatar
            isBordered
            color="secondary"
            size="lg"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
          <p className="text-xs text-center p-2">demo 1</p>
        </div>
        <div>
          <Avatar
            isBordered
            color="secondary"
            size="lg"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
          <p className="text-xs text-center p-2">demo 1</p>
        </div>
        <div>
          <Avatar
            isBordered
            color="secondary"
            size="lg"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
          <p className="text-xs text-center p-2">demo 1</p>
        </div>
        <div>
          <Avatar
            isBordered
            color="secondary"
            size="lg"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
          <p className="text-xs text-center p-2">demo 1</p>
        </div>
        <div>
          <Avatar
            isBordered
            color="secondary"
            size="lg"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
          <p className="text-xs text-center p-2">demo 1</p>
        </div>
        <div>
          <Avatar
            isBordered
            color="secondary"
            size="lg"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
          <p className="text-xs text-center p-2">demo 1</p>
        </div>
        <div>
          <Avatar
            isBordered
            color="secondary"
            size="lg"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
          <p className="text-xs text-center p-2">demo 1</p>
        </div>
      </div>
    </div>
  );
};

export default Feeds;
