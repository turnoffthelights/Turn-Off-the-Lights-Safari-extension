//
//  VideoViewController.swift
//  Turn Off the Lights for Safari (iOS)
//
//  Created by Stefan Van Damme on 18/06/2021.
//

import UIKit
import WebKit

class VideoViewController: UIViewController {

    var video:Video = Video()
    @IBOutlet weak var videoWebView: WKWebView!
    @IBOutlet weak var videoTitle: UILabel!
    override func viewDidLoad() {
        super.viewDidLoad()
        videoTitle.text = video.Title
        getVideo(videoKey: video.Key)
    }
    
    func getVideo(videoKey:String) {
        let url = URL(string: "https://www.youtube.com/embed/\(videoKey)")
        videoWebView.load(URLRequest(url: url!))
    }

    @IBAction func subscribe(_ sender: Any) {
        guard let url = URL(string: "https://www.youtube.com/c/turnoffthelights?sub_confirmation=1") else { return }
        UIApplication.shared.open(url)
    }

}
