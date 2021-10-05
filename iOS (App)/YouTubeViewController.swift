//
//  YouTubeViewController.swift
//  Turn Off the Lights for Safari (iOS)
//
//  Created by Stefan Van Damme on 18/06/2021.
//

import UIKit
import SafariServices
import AVFoundation
import AVKit
import AudioToolbox

//UITableViewDelegate, UITableViewDataSource
class YouTubeViewController: UITableViewController{
    @IBOutlet weak var videolayer: UIView!
    @IBOutlet weak var imageinspiration: UIImageView!
    
    // View which contains the loading text and the spinner
    let loadingView = UIView()

    // Spinner shown during load the TableView
    var spinner = UIActivityIndicatorView()

    // Text shown during load the TableView
    let loadingLabel = UILabel()

    // Set the activity indicator into the main view
    private func setLoadingScreen() {

        // Sets the view which contains the loading text and the spinner
        let width: CGFloat = 120
        let height: CGFloat = 30
        let x = (tableView.frame.width / 2) - (width / 2)
        let y = (tableView.frame.height / 2) - (height / 2) - (navigationController?.navigationBar.frame.height)!
        loadingView.frame = CGRect(x: x, y: y, width: width, height: height)

        // Sets loading text
        loadingLabel.textColor = .gray
        loadingLabel.textAlignment = .center
        loadingLabel.text = "Loading..."
        loadingLabel.frame = CGRect(x: 0, y: 0, width: 140, height: 30)

        // Sets spinner
        spinner = UIActivityIndicatorView(style: .medium)
        spinner.frame = CGRect(x: 0, y: 0, width: 30, height: 30)
        spinner.startAnimating()

        // Adds text and spinner to the view
        loadingView.addSubview(spinner)
        loadingView.addSubview(loadingLabel)

        tableView.addSubview(loadingView)
    }
    
    // Remove the activity indicator from the main view
    private func removeLoadingScreen() {
        // Hides and stops the text and the spinner
        spinner.stopAnimating()
        spinner.isHidden = true
        loadingLabel.isHidden = true
    }
    
    var videos:[Video] = []
    var video:Video = Video()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        // Do any additional setup after loading the view, typically from a nib.
        setLoadingScreen()
        
        let videoa = Video()
        videoa.Key = "GSEqAjzy_hg"
        videoa.Title = "⚡️Introduction Turn Off the Lights for Safari on iOS 15"
        videos.append(videoa)
        
        let videob = Video()
        videob.Key = "la3l4IQrtbo"
        videob.Title = "🔵How to enable Safari Extension iOS 15?"
        videos.append(videob)
        
        let videoc = Video()
        videoc.Key = "vubVpLm8ldk"
        videoc.Title = "🔵How to enable the Night Owl profile on iOS 15?"
        videos.append(videoc)
        
        let videod = Video()
        videod.Key = "3TNYUG9O-u8"
        videod.Title = "🔵How to enable the Eye Protection profile on iOS 15?"
        videos.append(videod)

        let videoe = Video()
        videoe.Key = "Rm8nKaPlnSI"
        videoe.Title = "🔵How to enable the Video Lover profile on iOS 15?"
        videos.append(videoe)
        
        let videof = Video()
        videof.Key = "91DmhjsCb_Y"
        videof.Title = "🔵How to open the Turn Off the Lights Options page on iOS 15?"
        videos.append(videof)

        // -- general videos
        
        let video = Video()
        video.Key = "yONZVLA72ZM"
        video.Title = "🔔Introduction - Turn Off the Lights Browser Extension version 4"
        videos.append(video)
        
        let video2 = Video()
        video2.Key = "oWg0rMvCJng"
        video2.Title = "🌿Turn Off the Lights Browser Extension Version 4 - The Ultimate and Valuable Tool!"
        videos.append(video2)
        
        let video3 = Video()
        video3.Key = "nsmGfOAgcoE"
        video3.Title = "🎁Double Click - Will make you see the useful HIDDEN Menu!"
        videos.append(video3)
        
        let video4 = Video()
        video4.Key = "mbO37Ac5ny8"
        video4.Title = "🕯How enable the Night Mode feature?"
        videos.append(video4)
        
        let video5 = Video()
        video5.Key = "klMYXTbFzok"
        video5.Title = "🔵How to enable the water reflection feature in the Turn Off the Lights browser extension?"
        videos.append(video5)
        
        let video6 = Video()
        video6.Key = "GOARYksUcEM"
        video6.Title = "🔵How to enable the Atmosphere Lighting Vivid Mode in the Turn Off the Lights browser extension?"
        videos.append(video6)
        
        let video7 = Video()
        video7.Key = "V5uDBWCzrEQ"
        video7.Title = "🔵How to enable the Audio Visualizer on YouTube? (and other HTML5 video websites)"
        videos.append(video7)
        
        let video8 = Video()
        video8.Key = "P9_tK6p-YOU"
        video8.Title = "🔵How to enable the block 60fps on YouTube?"
        videos.append(video8)
        
        addvideo()
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
    
    @IBAction func openyoutube(_ sender: Any) {
        if let url = URL(string: "https://www.youtube.com/c/turnoffthelights?sub_confirmation=1") {
            UIApplication.shared.open(url)
        }
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
        
//        playerLayer.cornerRadius = 15
//        playerLayer.maskedCorners = [.layerMaxXMaxYCorner,.layerMaxXMinYCorner,.layerMinXMaxYCorner,.layerMinXMinYCorner]
//        playerLayer.masksToBounds = true
     
        // poster avplayer
        imageinspiration.image = imagePreview(from: pathURL, in: 0.0)
    }

    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return videos.count
    }
    
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "cell", for: indexPath) as! VideoTableViewCell
        cell.videoTitle.text = videos[indexPath.row].Title
        let url = "https://img.youtube.com/vi/\(videos[indexPath.row].Key)/maxresdefault.jpg"
        cell.videoImage.downloaded(from: url)
        return cell
    }
    
    override func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        let vi = videos[indexPath.row].Key
//        self.video = vi
//        performSegue(withIdentifier: "toVideo", sender: nil)
        
        let youtubeId = vi
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
    
    // animation effect add moving item on scroll
    override func tableView(_ tableView: UITableView, willDisplay cell: UITableViewCell, forRowAt indexPath: IndexPath) {
        self.removeLoadingScreen()
        
        if let lastIndexPath = tableView.indexPathsForVisibleRows?.last{
            if lastIndexPath.row <= indexPath.row{
                cell.center.y = cell.center.y + cell.frame.height / 2
                cell.alpha = 0
                UIView.animate(withDuration: 0.5, delay: 0.05*Double(indexPath.row), options: [.curveEaseInOut], animations: {
                    cell.center.y = cell.center.y - cell.frame.height / 2
                    cell.alpha = 1
                }, completion: nil)
            }
        }
    }
    
}

class Video{
    var Key:String = ""
    var Title:String = ""
}

extension UIImageView {
    func downloaded(from url: URL, contentMode mode: UIView.ContentMode = .scaleAspectFit) {
        contentMode = mode
        URLSession.shared.dataTask(with: url) { data, response, error in
            guard
                let httpURLResponse = response as? HTTPURLResponse, httpURLResponse.statusCode == 200,
                let mimeType = response?.mimeType, mimeType.hasPrefix("image"),
                let data = data, error == nil,
                let image = UIImage(data: data)
                else { return }
            DispatchQueue.main.async() {
                self.image = image
            }
            }.resume()
    }
    func downloaded(from link: String, contentMode mode: UIView.ContentMode = .scaleAspectFit) {
        guard let url = URL(string: link) else { return }
        downloaded(from: url, contentMode: mode)
    }
}
