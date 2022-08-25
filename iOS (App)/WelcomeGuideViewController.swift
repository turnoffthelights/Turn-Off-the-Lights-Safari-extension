//
//  WelcomeGuideViewController.swift
//  WelcomeGuideViewController
//
//  Created by Stefan Van Damme on 24/07/2021.
//

import UIKit
import AVKit
import AVFoundation
import SafariServices

extension UIView {
    @IBInspectable
    var viewcornerRadius: CGFloat {
        get {
            return layer.cornerRadius
        }
        set {
            layer.cornerRadius = newValue
            layer.masksToBounds = true;
        }
    }
}

extension UIImageView {
    @IBInspectable
    var imagewcornerRadius: CGFloat {
        get {
            return layer.cornerRadius
        }
        set {
            layer.cornerRadius = newValue
            layer.masksToBounds = true;
        }
    }
}

class WelcomeGuideViewController: UIViewController {
    @IBOutlet weak var titlemain: UILabel!
    @IBOutlet weak var titledes: UILabel!
    @IBOutlet weak var lbloptions: UILabel!
    @IBOutlet weak var lblaction3: UILabel!
    @IBOutlet weak var lblaction2: UILabel!
    @IBOutlet weak var lblaction1: UILabel!
    override func viewDidLoad() {
        super.viewDidLoad()

        lbloptions?.text = lbloptions?.text?.uppercased()
        lblaction3?.text = lblaction3?.text?.uppercased()
        lblaction2?.text = lblaction2?.text?.uppercased()
        lblaction1?.text = lblaction1?.text?.uppercased()
    }

    func openyoutubeapporweb(text:String){
        let youtubeId = text
        if let youtubeURL = URL(string: "youtube://\(youtubeId)"),
            UIApplication.shared.canOpenURL(youtubeURL) {
            // redirect to app
            UIApplication.shared.open(youtubeURL, options: [:], completionHandler: nil)
        } else if URL(string: "https://www.youtube.com/watch?v=\(youtubeId)") != nil {
            // redirect through safari
            //UIApplication.shared.open(youtubeURL, options: [:], completionHandler: nil)
            
            let thisurlpost = "https://www.youtube.com/watch?v=\(youtubeId)"
            let config = SFSafariViewController.Configuration()
            config.barCollapsingEnabled = true
            config.entersReaderIfAvailable = false

            if let url = URL(string: thisurlpost) {
                let vc = SFSafariViewController(url: url, configuration: config)
                present(vc, animated: true)
            }
        }
    }
    
    @IBAction func opennightowlprofile(_ sender: Any) {
        openyoutubeapporweb(text: "vubVpLm8ldk")
    }

    @IBAction func openeyeprofile(_ sender: Any) {
        openyoutubeapporweb(text: "3TNYUG9O-u8")
    }
    
    let thisgithub = "https://github.com/turnoffthelights/Turn-Off-the-Lights-Safari-extension"
    @IBAction func opengithub(_ sender: Any) {
        let config = SFSafariViewController.Configuration()
        config.barCollapsingEnabled = true
        config.entersReaderIfAvailable = false

        if let url = URL(string: thisgithub) {
            let vc = SFSafariViewController(url: url, configuration: config)
            present(vc, animated: true)
        }
    }
    
    @IBAction func openexterngithub(_ sender: Any) {
        if let url = URL(string: thisgithub) {
            UIApplication.shared.open(url)
        }
        Stefanfunctions().openweb(text:thisgithub)
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
}
