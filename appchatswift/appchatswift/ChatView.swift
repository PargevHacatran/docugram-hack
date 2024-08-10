import SwiftUI

struct ChatView: View {
    @State private var messages: [Message] = [
        Message(sender: "Иван", documentName: "акт выполненных работ.doc", time: "15:00", isCurrentUser: false),
        Message(sender: "", documentName: "договор с поставщиком.doc", time: "15:06", isCurrentUser: true)
    ]
    
    var body: some View {
        VStack {

            HStack {
                Image(systemName: "person.fill")
                    .resizable()
                    .scaledToFit()
                    .frame(width: 40, height: 40)
                    .clipShape(Circle())
                
                Text("Иван")
                    .font(.headline)
                    .padding(.leading, 10)
                
                Spacer()
            }
            .padding()
            
            // Messages list
            ScrollView {
                VStack {
                    ForEach(messages) { message in
                        HStack {
                            if !message.isCurrentUser {
                                Image(systemName: "person.fill")
                                    .resizable()
                                    .scaledToFit()
                                    .frame(width: 30, height: 30)
                                    .clipShape(Circle())
                                    .padding(.trailing, 10)
                            }
                            
                            VStack(alignment: message.isCurrentUser ? .trailing : .leading) {
                                Text(message.sender)
                                    .font(.headline)
                                
                                HStack {
                                    Text(message.documentName)
                                        .font(.body)
                                        .padding(15)
                                        .background(message.isCurrentUser ? Color.green.opacity(0.2) : Color.white)
                                        .clipShape(RoundedRectangle(cornerRadius: 15))
                                        .shadow(radius: 5)
                                    
                                    if !message.isCurrentUser {
                                        Image(systemName: "arrow.down.circle.fill")
                                            .font(.title2)
                                            .foregroundColor(.blue)
                                            .padding(.leading, 10)
                                    }
                                }
                                .padding(message.isCurrentUser ? .leading : .trailing, 10)
                                
                                Text(message.time)
                                    .font(.caption)
                                    .foregroundColor(.gray)
                            }
                            .padding()
                            
                            if message.isCurrentUser {
                                Button(action: {
                                    
                                    print("Document download tapped")
                                }) {
                                    Image(systemName: "arrow.down.circle.fill")
                                        .font(.title2)
                                        .foregroundColor(.blue)
                                        .padding()
                                }
                            }
                        }
                        .padding(message.isCurrentUser ? .leading : .trailing, 40)
                    }
                }
            }
            
            Spacer()
            
      
            Button(action: {
                
                print("Document upload tapped")
            }) {
                HStack {
                    Text("📁 Загрузить документ")
                        .font(.headline)
                    Spacer()
                    Image(systemName: "arrow.up.circle.fill")
                        .font(.headline)
                }
                .padding()
                .background(Color.blue)
                .foregroundColor(.white)
                .cornerRadius(25)
            }
            .padding()
        }
        .navigationTitle("Иван")
        .navigationBarTitleDisplayMode(.inline)
    }
}

struct ChatView_Previews: PreviewProvider {
    static var previews: some View {
        ChatView()
    }
}

