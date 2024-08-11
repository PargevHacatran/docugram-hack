import SwiftUI

struct CreateChatView: View {
    @Binding var showingCreateChat: Bool
    @Binding var chatCode: String
    @Binding var selectedChatName: String?

    let chatNames = ["Вика", "Андрей", "Александр", "Олег", "Татьяна"]

    var body: some View {
        VStack {
            Text("Введите код для создания чата")
                .font(.headline)
                .padding()

            TextField("Код чата", text: $chatCode)
                .textFieldStyle(RoundedBorderTextFieldStyle())
                .padding()

            Button(action: {
                // Логика создания чата
                if let randomName = chatNames.randomElement() {
                    selectedChatName = randomName
                }
                showingCreateChat = false
            }) {
                Text("Создать чат")
                    .padding()
                    .background(Color.blue)
                    .foregroundColor(.white)
                    .cornerRadius(8)
            }
            .padding()

            Button(action: {
                showingCreateChat = false
            }) {
                Text("Отмена")
                    .foregroundColor(.red)
            }
            .padding(.top)
        }
        .padding()
    }
}

struct CreateChatView_Previews: PreviewProvider {
    static var previews: some View {
        CreateChatView(showingCreateChat: .constant(true), chatCode: .constant(""), selectedChatName: .constant(nil))
    }
}
