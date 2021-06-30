//
//  GalleryController.swift
//  Date Today
//
//  Created by Stefan Van Damme on 06/10/2020.
//

import Foundation
import UIKit
import SafariServices

@IBDesignable extension UIButton {

    @IBInspectable var borderWidth: CGFloat {
        set {
            layer.borderWidth = newValue
        }
        get {
            return layer.borderWidth
        }
    }

    @IBInspectable var cornerRadius: CGFloat {
        set {
            layer.cornerRadius = newValue
        }
        get {
            return layer.cornerRadius
        }
    }

    @IBInspectable var borderColor: UIColor? {
        set {
            guard let uiColor = newValue else { return }
            layer.borderColor = uiColor.cgColor
        }
        get {
            guard let color = layer.borderColor else { return nil }
            return UIColor(cgColor: color)
        }
    }
}

class GalleryController: UITableViewController,SFSafariViewControllerDelegate{
    
    override func viewDidLoad() {
        super.viewDidLoad()
        navigationItem.largeTitleDisplayMode = .never
    }
    
    @IBOutlet weak var iconmytree: UIImageView!
    @IBOutlet weak var iconsunrise: UIImageView!
    @IBOutlet weak var icondisk: UIImageView!
    @IBOutlet weak var iconlamp: UIImageView!
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        
        iconmytree.layer.borderColor = UIColor.separator.cgColor
        iconmytree.layer.masksToBounds = true
        iconmytree.contentMode = .scaleToFill
        iconmytree.layer.borderWidth = 1
        
        iconsunrise.layer.borderColor = UIColor.separator.cgColor
        iconsunrise.layer.masksToBounds = true
        iconsunrise.contentMode = .scaleToFill
        iconsunrise.layer.borderWidth = 1
        
        icondisk.layer.borderColor = UIColor.separator.cgColor
        icondisk.layer.masksToBounds = true
        icondisk.contentMode = .scaleToFill
        icondisk.layer.borderWidth = 1
        
        iconlamp.layer.borderColor = UIColor.separator.cgColor
        iconlamp.layer.masksToBounds = true
        iconlamp.contentMode = .scaleToFill
        iconlamp.layer.borderWidth = 1
    }

    override func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        if indexPath.row == 0 {
            // check if website exists
            guard let url = URL(string: "https://apps.apple.com/app/id1062397646") else {
            return
            }

            let safariVC = SFSafariViewController(url: url)
            safariVC.modalPresentationStyle = UIModalPresentationStyle.popover
            safariVC.delegate = self
            present(safariVC, animated: true, completion: nil)
        }else if indexPath.row == 1 {
            // check if website exists
            guard let url = URL(string: "https://apps.apple.com/app/id1530008755") else {
            return
            }

            let safariVC = SFSafariViewController(url: url)
            safariVC.modalPresentationStyle = UIModalPresentationStyle.popover
            safariVC.delegate = self
            present(safariVC, animated: true, completion: nil)
        }else if indexPath.row == 2 {
            // check if website exists
            guard let url = URL(string: "https://apps.apple.com/app/id1043842695") else {
            return
            }

            let safariVC = SFSafariViewController(url: url)
            safariVC.modalPresentationStyle = UIModalPresentationStyle.popover
            safariVC.delegate = self
            present(safariVC, animated: true, completion: nil)
        }else if indexPath.row == 3 {
            // check if website exists
            guard let url = URL(string: "https://apps.apple.com/app/id1044081431") else {
            return
            }

            let safariVC = SFSafariViewController(url: url)
            safariVC.modalPresentationStyle = UIModalPresentationStyle.popover
            safariVC.delegate = self
            present(safariVC, animated: true, completion: nil)
        }
        
        tableView.deselectRow(at: indexPath, animated: true)
    }
    
    func safariViewControllerDidFinish(_ controller: SFSafariViewController) {
        controller.dismiss(animated: true, completion: nil)
    }
}
