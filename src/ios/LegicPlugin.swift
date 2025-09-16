import Foundation
import Cordova

@objc(LegicPlugin) class LegicPlugin: CDVPlugin {
    @objc(echo:)
    func echo(command: CDVInvokedUrlCommand) {
        let message = command.arguments.first as? String ?? "No message"
        let result = CDVPluginResult(status: CDVCommandStatus_OK, messageAs: "Echo: \(message)")
        self.commandDelegate.send(result, callbackId: command.callbackId)
    }
}