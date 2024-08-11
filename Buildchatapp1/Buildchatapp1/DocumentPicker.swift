import SwiftUI
import UniformTypeIdentifiers

struct DocumentPicker: UIViewControllerRepresentable {
    @Binding var messages: [Message]

    func makeUIViewController(context: Context) -> UIDocumentPickerViewController {
        let documentPicker = UIDocumentPickerViewController(forOpeningContentTypes: [UTType.text, UTType.data])
        documentPicker.delegate = context.coordinator
        return documentPicker
    }

    func updateUIViewController(_ uiViewController: UIDocumentPickerViewController, context: Context) {}

    func makeCoordinator() -> Coordinator {
        Coordinator(self)
    }

    class Coordinator: NSObject, UIDocumentPickerDelegate {
        var parent: DocumentPicker

        init(_ parent: DocumentPicker) {
            self.parent = parent
        }

        func documentPicker(_ controller: UIDocumentPickerViewController, didPickDocumentsAt urls: [URL]) {
            guard let selectedFileURL = urls.first else { return }
            let fileName = selectedFileURL.lastPathComponent
            let newMessage = Message(sender: "Вы", text: "Файл:", time: Date().formatted(), isIncoming: false, documentName: fileName)
            parent.messages.append(newMessage)
        }

        func documentPickerWasCancelled(_ controller: UIDocumentPickerViewController) {
            // Обработка отмены выбора документа
        }
    }
}
