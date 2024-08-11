import SwiftUI
import UniformTypeIdentifiers

struct Message: Identifiable {
    let id = UUID()
    let sender: String
    let text: String
    let time: String
    let isIncoming: Bool
    let documentName: String?
}

struct ChatView: View {
    @State private var messages: [Message] = []
    @State private var showingDocumentPicker = false
    @State private var generatedDocumentName: String?
    
    var chatName: String

    var body: some View {
        VStack {
            HStack {
                Image(systemName: "person.circle.fill")
                    .resizable()
                    .frame(width: 40, height: 40)
                Text(chatName)
                    .font(.headline)
                Spacer()
            }
            .padding()

            ScrollView {
                ForEach(messages) { message in
                    HStack {
                        if message.isIncoming {
                            Spacer()
                        }
                        VStack(alignment: message.isIncoming ? .leading : .trailing) {
                            Text(message.text)
                                .padding()
                                .background(message.isIncoming ? Color.gray.opacity(0.2) : Color.green.opacity(0.5))
                                .cornerRadius(15)
                            if let documentName = message.documentName {
                                HStack {
                                    Text(documentName)
                                    Button(action: {
                                        // Логика для скачивания файла
                                    }) {
                                        Image(systemName: "arrow.down.circle.fill")
                                    }
                                }
                                .padding(.top, 2)
                            }
                            Text(message.time)
                                .font(.caption)
                                .foregroundColor(.gray)
                        }
                        if !message.isIncoming {
                            Spacer()
                        }
                    }
                    .padding(message.isIncoming ? .leading : .trailing)
                }
            }

            Spacer()

            VStack(spacing: 16) {
                Button(action: {
                    showingDocumentPicker = true
                }) {
                    HStack {
                        Image(systemName: "doc.fill")
                        Text("Отправить документ")
                    }
                    .frame(maxWidth: .infinity, minHeight: 50) // Задает одинаковый размер для всех кнопок
                    .background(Color.blue)
                    .foregroundColor(.white)
                    .cornerRadius(8)
                }
                .sheet(isPresented: $showingDocumentPicker) {
                    DocumentPicker(messages: $messages)
                }

                Button(action: {
                    generateDocument()
                }) {
                    HStack {
                        Image(systemName: "doc.text.fill")
                        Text("Сгенерировать документ")
                    }
                    .frame(maxWidth: .infinity, minHeight: 50) // Задает одинаковый размер для всех кнопок
                    .background(Color.green)
                    .foregroundColor(.white)
                    .cornerRadius(8)
                }
            }
            .padding()
        }
        .navigationBarTitle(chatName, displayMode: .inline)
    }

    private func generateDocument() {
        // Логика генерации документа
        let fileName = "generatedDocument.txt"
        let newMessage = Message(sender: "Вы", text: "Файл:", time: Date().formatted(), isIncoming: false, documentName: fileName)
        messages.append(newMessage)
    }
}

struct ColoredButtonStyle: ButtonStyle {
    var color: Color

    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .padding()
            .frame(maxWidth: .infinity) // Кнопки одинакового размера
            .background(color)
            .foregroundColor(.white)
            .cornerRadius(8)
            .padding(.horizontal, 5)
    }
}

extension Date {
    func formatted() -> String {
        let formatter = DateFormatter()
        formatter.dateFormat = "HH:mm"
        return formatter.string(from: self)
    }
}

struct ChatView_Previews: PreviewProvider {
    static var previews: some View {
        ChatView(chatName: "Иван")
    }
}
