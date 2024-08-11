import SwiftUI

struct DocumentGenerator: View {
    @Environment(\.presentationMode) var presentationMode
    @State private var selectedTemplate = "Шаблон 1"
    @State private var documentContent = ""

    var onDocumentGenerated: (String) -> Void
    
    var body: some View {
        NavigationView {
            VStack {
                Picker("Выберите шаблон", selection: $selectedTemplate) {
                    Text("Шаблон 1").tag("Шаблон 1")
                    Text("Шаблон 2").tag("Шаблон 2")
                }
                .pickerStyle(SegmentedPickerStyle())
                .padding()
                
                TextEditor(text: $documentContent)
                    .padding()
                    .border(Color.gray)
                    .cornerRadius(10)
                
                Button(action: {
                    let generatedDocumentName = "\(selectedTemplate).doc"
                    onDocumentGenerated(generatedDocumentName)
                    presentationMode.wrappedValue.dismiss()
                }) {
                    Text("Сгенерировать документ")
                        .padding()
                        .background(Color.green)
                        .foregroundColor(.white)
                        .cornerRadius(10)
                }
                .padding()
                
                Spacer()
            }
            .navigationTitle("Генератор документов")
        }
    }
}
