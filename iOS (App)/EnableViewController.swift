//
//  EnableViewController.swift
//  Turn Off the Lights for Safari (iOS)
//
//  Created by Stefan Van Damme on 16/06/2021.
//

import Foundation
import UIKit
import AVFoundation
import AVKit
import AudioToolbox

class EnableViewController: UIViewController,AVPlayerViewControllerDelegate{
    
    @IBOutlet weak var btnok: UIButton!
    
    @IBOutlet weak var videolayer: UIView!
    @IBOutlet weak var imageinspiration: UIImageView!
    override func viewDidLoad(){
        super.viewDidLoad()
        addvideo()
        settranslationtext()
        
        // default zero opacity
        self.btnok.alpha = 0.0
    }
    
    @IBOutlet weak var lbleasysetup: UILabel!
    @IBOutlet weak var lblturnoffthelights: UILabel!
    @IBOutlet weak var lblactivate: UILabel!
    @IBOutlet weak var lblwatchvideo: UIButton!
    @IBOutlet weak var lblstep1: UILabel!
    @IBOutlet weak var lblstep2: UILabel!
    @IBOutlet weak var lblstep3: UILabel!
    @IBOutlet weak var lblstep4: UILabel!
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)

        DispatchQueue.main.asyncAfter(deadline: .now()+0.8, execute: {
            UIView.animate(withDuration: 1.5) {
                self.btnok.alpha = 1.0
            }
        })
    }

    func settranslationtext(){
        lbleasysetup.text = String.localizedStringWithFormat(NSLocalizedString("lbleasytosetup", comment: ""), "").uppercased()
        lblturnoffthelights.text = String.localizedStringWithFormat(NSLocalizedString("lblturnoffthelights", comment: ""), "")
        lblactivate.text = String.localizedStringWithFormat(NSLocalizedString("lblactivate", comment: ""), "")
        lblwatchvideo.setTitle(String.localizedStringWithFormat(NSLocalizedString("lblwatchvideo", comment: ""), ""), for: .normal)
        
        // steps list
        lblstep1.text = String.localizedStringWithFormat(NSLocalizedString("lblstep1", comment: ""), "")
        
        let part2a = String.localizedStringWithFormat(NSLocalizedString("lblstep2a", comment: ""), "") + " "
        let part2b = String.localizedStringWithFormat(NSLocalizedString("lblstep2b", comment: ""), "")
        let part2c = " " + String.localizedStringWithFormat(NSLocalizedString("lblstep2c", comment: ""), "")
        let attributedString = NSMutableAttributedString(string:part2a)
        let attrs = [NSAttributedString.Key.font : UIFont.boldSystemFont(ofSize: 14)]
        let boldString = NSMutableAttributedString(string:part2b, attributes:attrs)
        let lastString = NSMutableAttributedString(string:part2c)
        attributedString.append(boldString)
        attributedString.append(lastString)
        lblstep2.attributedText = attributedString

        let part3a = String.localizedStringWithFormat(NSLocalizedString("lblstep3a", comment: ""), "") + " "
        let part3b = String.localizedStringWithFormat(NSLocalizedString("lblstep3b", comment: ""), "")
        let part3c = String.localizedStringWithFormat(NSLocalizedString("lblstep3c", comment: ""), "") + " "
        let part3d = String.localizedStringWithFormat(NSLocalizedString("lblstep3d", comment: ""), "")
        
        let attributedString3 = NSMutableAttributedString(string:part3a)
        let attrs3 = [NSAttributedString.Key.font : UIFont.boldSystemFont(ofSize: 14)]
        let boldString3b = NSMutableAttributedString(string:part3b, attributes:attrs3)
        let lastString3c = NSMutableAttributedString(string:part3c)
        attributedString3.append(boldString3b)
        attributedString3.append(lastString3c)
        let boldString3d = NSMutableAttributedString(string:part3d, attributes:attrs3)
        attributedString3.append(boldString3d)
        lblstep3.attributedText = attributedString3

        let part4a = String.localizedStringWithFormat(NSLocalizedString("lblstep4a", comment: ""), "") + " "
        let part4b = String.localizedStringWithFormat(NSLocalizedString("lblstep4b", comment: ""), "")

        let attributedString4 = NSMutableAttributedString(string:part4a)
        let attrs4 = [NSAttributedString.Key.font : UIFont.boldSystemFont(ofSize: 14)]
        let boldString4b = NSMutableAttributedString(string:part4b, attributes:attrs4)
        attributedString4.append(boldString4b)
        lblstep4.attributedText = attributedString4
    }
    
    func imagePreview(from moviePath: URL, in seconds: Double) -> UIImage? {
        let timestamp = CMTime(seconds: seconds, preferredTimescale: 60)
        let asset = AVURLAsset(url: moviePath)
        let generator = AVAssetImageGenerator(asset: asset)
        generator.appliesPreferredTrackTransform = true

        guard let imageRef = try? generator.copyCGImage(at: timestamp, actualTime: nil) else {
            return nil
        }
        return UIImage(cgImage: imageRef)
    }
    
    private var player: AVQueuePlayer!
    private var playerLayer: AVPlayerLayer!
    private var playerItem: AVPlayerItem!
    private var playerLooper: AVPlayerLooper!

    // Fixed to update size on iPad to full size
    override func viewDidLayoutSubviews() {
        super.viewDidLayoutSubviews()
        playerLayer.frame = videolayer.layer.bounds
    }
    
    func addvideo(){
        let path = Bundle.main.path(forResource: "forest", ofType: "mov")
        let pathURL = URL(fileURLWithPath: path!)
        let duration = Int64( ( (Float64(CMTimeGetSeconds(AVAsset(url: pathURL).duration)) *  10.0) - 1) / 10.0 )

        player = AVQueuePlayer()
        player.volume = 0
        playerLayer = AVPlayerLayer(player: player)
        playerItem = AVPlayerItem(url: pathURL)
        playerLooper = AVPlayerLooper(player: player, templateItem: playerItem,
                                      timeRange: CMTimeRange(start: CMTime.zero, end: CMTimeMake(value: duration, timescale: 1)) )
        playerLayer.videoGravity = AVLayerVideoGravity.resizeAspectFill
        playerLayer.frame = videolayer.layer.bounds

        videolayer.layer.insertSublayer(playerLayer, at: 1)
        player.play()
        
        playerLayer.cornerRadius = 15
        playerLayer.maskedCorners = [.layerMaxXMaxYCorner,.layerMaxXMinYCorner,.layerMinXMaxYCorner,.layerMinXMinYCorner]
        playerLayer.masksToBounds = true
     
        // poster avplayer
        imageinspiration.image = imagePreview(from: pathURL, in: 0.0)
    }
    
    @IBAction func opentutorialvideo(_ sender: Any) {
        var path = Bundle.main.path(forResource: "enable-safari-extension-iphone", ofType: "mp4")
        if UIDevice.current.userInterfaceIdiom == .pad {
            path = Bundle.main.path(forResource: "enable-safari-extension-ipad", ofType: "mov")
        }else{
            path = Bundle.main.path(forResource: "enable-safari-extension-iphone", ofType: "mp4")
        }
        let url = NSURL(fileURLWithPath: path!)
        let player = AVPlayer(url:url as URL)
        playerController = AVPlayerViewController()
        playerController.player = player
        playerController.allowsPictureInPicturePlayback = true
        playerController.delegate = self
        playerController.player?.play()
        self.present(playerController,animated:true,completion:nil)
    }
    
    var playerController = AVPlayerViewController()
    func didfinishplaying(note : NSNotification)
    {
       playerController.dismiss(animated: true,completion: nil)
       let alertview = UIAlertController(title:"finished",message:"video finished",preferredStyle: .alert)
       alertview.addAction(UIAlertAction(title:"Ok",style: .default, handler: nil))
       self.present(alertview,animated:true,completion: nil)
    }

    func playerViewController(_ playerViewController: AVPlayerViewController, restoreUserInterfaceForPictureInPictureStopWithCompletionHandler completionHandler: @escaping (Bool) -> Void) {
       let currentviewController =  navigationController?.visibleViewController

       if currentviewController != playerViewController
       {
           currentviewController?.present(playerViewController,animated: true,completion:nil)
       }
    }

    @IBAction func closebutton(_ sender: Any) {
        let appdefaults = UserDefaults.standard
        appdefaults.set(true, forKey: "walkthroughPresented")
        appdefaults.synchronize()
        
        let generator = UINotificationFeedbackGenerator()
        generator.notificationOccurred(.success)

        NotificationCenter.default.post(name: Notification.Name(rawValue: "closeguide"), object: nil)
    }

}
