//
//  ViewController.swift
//  Turn Off the Lights for Safari
//
//  Created by Stefan Van Damme on 25/06/2020.
//

import Cocoa
import SafariServices.SFSafariApplication
import SafariServices.SFSafariExtensionManager
import AVKit
import AVFoundation

let appName = "Turn Off the Lights for Safari"
let extensionBundleIdentifier = "com.stefanvd.Turn-Off-the-Lights-for-Safari.Extension"

extension String {
    func localized(withComment comment: String? = nil) -> String {
        return NSLocalizedString(self, tableName: "Main",comment: comment ?? "")
    }
}

class ViewController: NSViewController {
    var observer: NSKeyValueObservation?
    
    @IBOutlet weak var bottombar: NSView!
    
    let thatvideo = AVPlayerView()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.view.wantsLayer = true
        
        // Do any additional setup after loading the view.
        self.view.layer?.backgroundColor = NSColor.white.cgColor
        
        self.updateExtensionStatus()
        
        // video
        guard let path = Bundle.main.path(forResource: "DaringInfantileDachshund", ofType:"mp4") else {
            return
        }
        
        
        
        let player = AVPlayer(url: URL(fileURLWithPath: path))
        thatvideo.player = player
        thatvideo.frame.origin.x = 136
        thatvideo.frame.origin.y = 182
        thatvideo.frame.size.width = 363
        thatvideo.frame.size.height = 205
        self.view.addSubview(thatvideo)
        thatvideo.controlsStyle = AVPlayerViewControlsStyle.none
        thatvideo.player!.allowsExternalPlayback = false
        thatvideo.player!.play()
        
        // repeat video loop
        NotificationCenter.default.addObserver(forName: .AVPlayerItemDidPlayToEndTime,
                                               object: nil,
                                               queue: nil) { [weak self] note in
                                                self!.thatvideo.player!.seek(to: CMTime.zero)
                                                self!.thatvideo.player!.play()
        }
    }
    
    @IBOutlet weak var welcomescreen: NSView!
    @IBOutlet weak var openactionbutton: NSButton!
    @IBOutlet weak var extensionStatusLabel: NSTextField!
    @IBOutlet weak var lblenableextension: NSTextField!
    @IBOutlet weak var installimage: NSImageView!
    @IBOutlet weak var safaripreview: NSImageView!
    
    override func viewWillAppear() {
    }
    
    override func viewDidAppear() {
        guard let path = Bundle.main.path(forResource: "DaringInfantileDachshund", ofType:"mp4") else {
            return
        }
        
        let player = AVPlayer(url: URL(fileURLWithPath: path))
        self.thatvideo.player = player
        self.thatvideo.player!.play()
    }
    
    @IBAction func lampbonus(_ sender: Any) {
        if let url = URL(string: "https://www.turnoffthelights.com/donate.html"), NSWorkspace.shared.open(url) {
            //print("default browser was successfully opened")
        }
    }
    
    func updateExtensionStatus() {
        let titlestatuslavelenabled = "Safari extension is Enabled".localized()
        let titlestatuslaveldisabled = "Safari extension is Disabled".localized()
        let titleactiondisabled = "Disable Turn Off the Lights".localized()
        let titleactionenabled = "Enable Turn Off the Lights".localized()
        
        SFSafariExtensionManager.getStateOfSafariExtension(withIdentifier: extensionBundleIdentifier) { (state, error) in
            //NSLog("extension: \(String(describing: state)), \(String(describing: error))")
            if error != nil {
                //print("Error determining the state of extension: \(String(describing: error))");
                return;
            }
            
            DispatchQueue.global().async(execute: {
                DispatchQueue.main.sync {
                    if state!.isEnabled {
                        self.extensionStatusLabel.stringValue = titlestatuslavelenabled
                        self.openactionbutton.title = titleactiondisabled
                        self.lblenableextension.isHidden = true
                        self.installimage.isHidden = true
                        self.safaripreview.isHidden = false
                        self.thatvideo.isHidden = false
                    } else {
                        self.extensionStatusLabel.stringValue = titlestatuslaveldisabled
                        self.openactionbutton.title = titleactionenabled
                        self.lblenableextension.isHidden = false
                        self.installimage.isHidden = false
                        self.safaripreview.isHidden = true
                        self.thatvideo.isHidden = true
                    }
                }
            })
            
            
        }
        
        
        // Recheck the status every 1.5 seconds
        DispatchQueue.main.asyncAfter(deadline: .now() + 1.5, execute: {
            self.updateExtensionStatus()
        })
    }
    
    override var representedObject: Any? {
        didSet {
        // Update the view, if already loaded.
        }
    }

    @IBAction func opensafari(_ sender: Any) {
        SFSafariExtensionManager.getStateOfSafariExtension(withIdentifier: extensionBundleIdentifier) { (state, error) in
            if error != nil {
                print("Error determining the state of extension: %@", error!);
                return;
            }

            //if state!.isEnabled {
                // The extension is already on.
                //NSWorkspace.shared.launchApplication("Safari")
                //NSApplication.shared().terminate(self)
            //} else {
                // Provide instructions to users on how to turn on your extension in Safari.
                SFSafariApplication.showPreferencesForExtension(withIdentifier: extensionBundleIdentifier) { (error) in
                    if error != nil {
                        print("Error launching the extension's preferences: %@", error!);
                        return;
                    }
                }
                //NSApplication.shared().terminate(self)
            //}
            
            DispatchQueue.main.async {
                NSApplication.shared.terminate(nil)
            }
        }
    }
    
    @IBAction func opensupport(_ sender: Any){
        if let url = URL(string: "https://www.turnoffthelights.com/support/"), NSWorkspace.shared.open(url) {
            //print("default browser was successfully opened")
        }
    }
    
    deinit {
        // perform the deinitialization
        NotificationCenter.default.removeObserver(self)
        thatvideo.player = nil
    }
}
