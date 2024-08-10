import Foundation

struct Message: Identifiable {
    let id = UUID()
    let sender: String
    let documentName: String
    let time: String
    let isCurrentUser: Bool
}
