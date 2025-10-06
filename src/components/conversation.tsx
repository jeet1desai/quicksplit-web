import { Card } from "@/components/ui/card";
import { Phone, MoreVertical, CheckCheck } from "lucide-react";

const messages = [
  {
    type: "user",
    name: "Sarah",
    message: "50 USD for pizza to @Alex @Mike @Jess",
    time: "14:32",
    color: "bg-orange-500",
  },
  {
    type: "bot",
    message:
      "✅ Logged $50 for pizza. Split equally among Alex, Mike, and Jess ($16.67 each).",
    time: "14:32",
  },
  {
    type: "user",
    name: "Mike",
    message: "who owes me?",
    time: "14:35",
    color: "bg-blue-500",
  },
  {
    type: "bot",
    message:
      "You are owed:\n• $16.67 from Sarah (Pizza)\n• $25 from Alex (Uber last week)\nTotal: $41.67",
    time: "14:35",
  },
  {
    type: "user",
    name: "Alex",
    message: "settle up @Mike",
    time: "14:38",
    color: "bg-purple-500",
  },
  {
    type: "bot",
    message:
      "Alex owes Mike $41.67 total.\n💳 Payment details:\nVenmo: @mike_jones\nUPI: mike@okbank",
    time: "14:38",
  },
];

const Conversation = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <Card
        className="overflow-hidden border-0 transition-all duration-500 animate-fade-in"
        style={{ animationDelay: "0.2s" }}
      >
        <div className="bg-gradient-to-r from-[#22c55e] to-[#22c55e] px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-bold text-lg shadow-md ring-2 ring-white/30">
              TP
            </div>
            <div className="">
              <div className="font-semibold text-white text-lg text-left">
                Trip Planning Group
              </div>
              <div className="text-xs text-white/90 font-medium text-left">
                Sarah, Mike, Alex, Jess, QuickSplit
              </div>
            </div>
          </div>
          <div className="flex items-center gap-5 text-white">
            <Phone className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform duration-200" />
            <MoreVertical className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform duration-200" />
          </div>
        </div>

        <div
          className="bg-gradient-to-b from-[#E5DDD5] to-[#ECE5DD] p-4 md:p-6 min-h-[500px] border-l-[1px] border-r-[1px] border-b-[1px] border-[#494949] rounded-b-xl"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        >
          <div className="space-y-4 max-w-1xl mx-auto">
            <div className="flex justify-center mb-6 animate-fade-in">
              <div className="bg-white/95 dark:bg-[#202C33]/95 backdrop-blur-sm px-2 py-1/2 rounded-lg">
                <span className="text-[10px] text-gray-600 dark:text-gray-300 tracking-wide">
                  TODAY
                </span>
              </div>
            </div>

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex gap-2 items-end ${
                  msg.type === "bot" ? "justify-start" : "justify-end"
                } animate-fade-in`}
                style={{ animationDelay: `${0.3 + index * 0.15}s` }}
              >
                {msg.type === "user" && (
                  <div
                    className={`size-8 rounded-full ${msg.color} flex items-center justify-center flex-shrink-0 text-white text-sm font-bold order-2 shadow-md ring-2 ring-white/50 dark:ring-white/20`}
                  >
                    {msg.name?.charAt(0)}
                  </div>
                )}

                <div
                  className={`max-w-[75%] ${
                    msg.type === "user" ? "order-1" : ""
                  }`}
                >
                  {msg.type === "user" && (
                    <div className="text-xs text-left font-medium text-gray-600 dark:text-gray-400 mb-1 px-1">
                      ~{msg.name}
                    </div>
                  )}
                  <div
                    className={`rounded-xl text-left transition-all duration-200 ${
                      msg.type === "user"
                        ? "bg-white dark:bg-[#202C33] text-gray-900 dark:text-gray-100 rounded-tr-none hover:scale-[1.02]"
                        : "bg-gradient-to-br from-[#DCF8C6] to-[#D9FDD3] dark:from-[#056162] dark:to-[#054F50] text-gray-900 dark:text-gray-100 rounded-tl-none hover:scale-[1.02]"
                    }`}
                  >
                    <div className="px-3 py-1.5">
                      <p className="text-xs leading-relaxed whitespace-pre-line break-words font-medium">
                        {msg.message}
                      </p>
                      <div className="flex items-center justify-end gap-1.5">
                        <span className="text-[8px] font-semibold text-gray-500 dark:text-gray-400">
                          {msg.time}
                        </span>
                        {msg.type === "bot" && (
                          <CheckCheck className="size-3 text-[#53BDEB] drop-shadow-sm" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {msg.type === "bot" && (
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#25D366] to-[#20BA5A] flex items-center justify-center flex-shrink-0 shadow-md ring-2 ring-[#25D366]/30">
                    <span className="text-white text-sm font-bold drop-shadow">
                      $
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* <div className="bg-gradient-to-r from-[#202C33] to-[#1B262C] px-4 py-4 flex items-center gap-3">
          <div className="flex-1 text-left bg-white dark:bg-[#2A3942] rounded-full px-5 py-3 text-sm text-gray-500 dark:text-gray-400 transition-shadow duration-200">
            Type a message...
          </div>
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#25D366] to-[#20BA5A] flex items-center justify-center hover:scale-105 transition-all duration-200 cursor-pointer ring-2 ring-[#25D366]/30">
            <svg
              className="w-5 h-5 text-white drop-shadow"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </div>
        </div> */}
      </Card>
    </section>
  );
};

export default Conversation;
