import SwiftUI

struct ChatListView: View {
    @State private var showingCreateChat = false
    @State private var chatCode = ""
    @State private var selectedChatName: String?

    var body: some View {
        VStack {
            List {
                if let chatName = selectedChatName {
                    NavigationLink(destination: ChatView(chatName: chatName)) {
                        HStack {
                            Image(systemName: "person.circle.fill")
                                .resizable()
                                .frame(width: 40, height: 40)
                            VStack(alignment: .leading) {
                                Text(chatName)
                                    .font(.headline)
                                Text("Последнее сообщение...")
                                    .font(.subheadline)
                                    .foregroundColor(.gray)
                            }
                        }
                    }
                }
            }

            HStack {
                NavigationLink(destination: EmptyView()) {
                    VStack {
                        Image(systemName: "person.crop.circle")
                            .resizable()
                            .frame(width: 50, height: 50)
                        Text("Чаты")
                            .font(.caption)
                    }
                }

                Spacer()

                Button(action: {
                    showingCreateChat = true
                }) {
                    VStack {
                        Image(systemName: "plus.circle.fill")
                            .resizable()
                            .frame(width: 50, height: 50)
                        Text("Создать чат")
                            .font(.caption)
                    }
                }
                .padding()

                Spacer()

                NavigationLink(destination: ProfileView()) {
                    VStack {
                        Image(systemName: "bubble.left.and.bubble.right.fill")
                            .resizable()
                            .frame(width: 50, height: 50)
                        Text("Профиль")
                            .font(.caption)
                    }
                }
            }
            .padding()

            .sheet(isPresented: $showingCreateChat) {
                CreateChatView(showingCreateChat: $showingCreateChat, chatCode: $chatCode, selectedChatName: $selectedChatName)
            }
        }
        .navigationBarTitle("Список чатов")
    }
}

struct ChatListView_Previews: PreviewProvider {
    static var previews: some View {
        ChatListView()
    }
}
