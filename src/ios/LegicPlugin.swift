import Foundation
import Cordova

@objc(LegicPlugin) class LegicPlugin: CDVPlugin {
    @objc(echo:)
    func echo(command: CDVInvokedUrlCommand) {
        let message = command.arguments.first as? String ?? "No message"
        let pluginResult = CDVPluginResult(status: CDVCommandStatus_OK,
                                           messageAs: "Echo: \(message)")
        self.commandDelegate.send(pluginResult, callbackId: command.callbackId)
    }
}
