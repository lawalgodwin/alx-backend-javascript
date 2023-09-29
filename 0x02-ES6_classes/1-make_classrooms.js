import ClassRoom from './0-classroom';

const classroom1 = new ClassRoom(19);
const classroom2 = new ClassRoom(20);
const classroom3 = new ClassRoom(34);

export default function initializeRooms() {
  return [classroom1, classroom2, classroom3];
}
