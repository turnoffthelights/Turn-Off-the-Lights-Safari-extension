//
//  YouTubeViewController.swift
//  Turn Off the Lights for Safari (iOS)
//
//  Created by Stefan Van Damme on 18/06/2021.
//

import UIKit

//UITableViewDelegate, UITableViewDataSource
class YouTubeViewController: UITableViewController{

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
        
        let video = Video()
        video.Key = "yONZVLA72ZM"
        video.Title = "🔔 Introduction - Turn Off the Lights Browser Extension version 4"
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
        video7.Title = "🔵 How to enable the Audio Visualizer on YouTube? (and other HTML5 video websites)"
        videos.append(video7)
        
        let video8 = Video()
        video8.Key = "P9_tK6p-YOU"
        video8.Title = "🔵How to enable the block 60fps on YouTube?"
        videos.append(video8)
    }

    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return videos.count
    }
    
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        
        let cell = tableView.dequeueReusableCell(withIdentifier: "cell", for: indexPath) as! VideoTableViewCell
        
        cell.videoTitle.text = videos[indexPath.row].Title
        let url = "https://img.youtube.com/vi/\(videos[indexPath.row].Key)/mqdefault.jpg"
        cell.videoImage.downloaded(from: url)
        
        return cell
    }
    
    override func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        let vi = videos[indexPath.row]
        self.video = vi
        performSegue(withIdentifier: "toVideo", sender: nil)
        
//        let youtubeId = vi
//        if let youtubeURL = URL(string: "youtube://\(youtubeId)"),
//            UIApplication.shared.canOpenURL(youtubeURL) {
//            // redirect to app
//            UIApplication.shared.open(youtubeURL, options: [:], completionHandler: nil)
//        } else if let youtubeURL = URL(string: "https://www.youtube.com/watch?v=\(youtubeId)") {
//            // redirect through safari
//            UIApplication.shared.open(youtubeURL, options: [:], completionHandler: nil)
//        }
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if segue.identifier == "toVideo" {
            let vc = segue.destination as! VideoViewController
            vc.video = self.video
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
