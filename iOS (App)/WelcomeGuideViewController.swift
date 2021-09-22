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
        
        DispatchQueue.main.async {
            self.titlemain?.alpha = 0
            UIView.animate(withDuration: 1.0, delay: 2.0, animations: {
                self.titlemain?.alpha = 1.0
            })
            
            self.titledes?.alpha = 0
            UIView.animate(withDuration: 1.0, delay: 3.0, animations: {
                self.titledes?.alpha = 1.0
            })
        }
    }

    @IBAction func opennightowlprofile(_ sender: Any) {
        let youtubeId = "vubVpLm8ldk"
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
    @IBAction func openeyeprofile(_ sender: Any) {
        let youtubeId = "3TNYUG9O-u8"
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
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
}
