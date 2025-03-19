import user from "../../../../public/images/user.jpg";

export default function UserButton() {
  return (
    <div className="flex justify-center items-center gap-2">
      <div className="w-10 h-10 rounded-full overflow-hidden">
        <img src={user} alt={"user"} className="object-cover" />
      </div>
    </div>
  );
}
