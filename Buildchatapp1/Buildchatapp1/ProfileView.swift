import SwiftUI

struct ProfileView: View {
    @State private var username = "Егор"
    @State private var avatar: Image? = nil
    @State private var showingChangeUsername = false

    var body: some View {
        VStack {
            if let avatar = avatar {
                avatar
                    .resizable()
                    .frame(width: 100, height: 100)
                    .clipShape(Circle())
            } else {
                Image(systemName: "person.crop.circle.fill")
                    .resizable()
                    .frame(width: 100, height: 100)
            }

            Text(username)
                .font(.largeTitle)
                .padding()

            Button(action: {
                showingChangeUsername = true
            }) {
                Text("Изменить имя")
            }
            .padding()

            Button(action: {
                // Логика изменения пароля
            }) {
                Text("Сменить пароль")
                    .foregroundColor(.blue)
            }
            .padding()

            List {
                Section(header: Text("Коды доступа")) {
                    Text("RQWE-3467-BASO-9915")
                    Text("DOMA-1900-QVKS-2101")
                    Text("OPSE-3467-JJSQ-9179")
                    Text("BGOI-1681-GGLI-0028")
                }

                Section(header: Text("Почта")) {
                    Text("seaworkit@mail.ru")
                }
            }
        }
        .navigationBarTitle("Профиль", displayMode: .inline)
        .sheet(isPresented: $showingChangeUsername) {
            ChangeUsernameView(username: $username)
        }
    }
}

struct ChangeUsernameView: View {
    @Binding var username: String

    var body: some View {
        VStack {
            TextField("Имя", text: $username)
                .textFieldStyle(RoundedBorderTextFieldStyle())
                .padding()

            Button(action: {
                // Логика сохранения имени
            }) {
                Text("Сохранить")
                    .padding()
                    .background(Color.blue)
                    .foregroundColor(.white)
                    .cornerRadius(8)
            }
            .padding()

            Button(action: {
                // Логика отмены
            }) {
                Text("Отмена")
                    .foregroundColor(.red)
            }
            .padding()
        }
        .padding()
    }
}

struct ProfileView_Previews: PreviewProvider {
    static var previews: some View {
        ProfileView()
    }
}
