//
//  PageViewController.swift
//  PageControl
//
//  Created by Stefan Van Damme on 10/06/2021.
//

import UIKit

class PageViewController: UIPageViewController, UIPageViewControllerDelegate, UIPageViewControllerDataSource {

    var pageControl = UIPageControl()
    
    // MARK: UIPageViewControllerDataSource
    
    lazy var orderedViewControllers: [UIViewController] = {
        return [self.newVc(viewController: "walk1"),
                self.newVc(viewController: "walk2"),
                self.newVc(viewController: "walk3"),
                self.newVc(viewController: "walk4"),
                self.newVc(viewController: "walk5"),
                self.newVc(viewController: "walk6")]
    }()

    var closeButton = UIButton()
    override func viewDidLoad() {
        super.viewDidLoad()
        self.dataSource = self
        self.delegate = self
        
        // This sets up the first view that will show up on our page control
        if let firstViewController = orderedViewControllers.first {
            setViewControllers([firstViewController],
                               direction: .forward,
                               animated: true,
                               completion: nil)
        }

        configurePageControl()
        
        // add close button on top
        //let config = UIButton.Configuration.gray()
        closeButton = UIButton.init(type: .close)
        //closeButton.configuration = config
        closeButton.frame = CGRect(x: 0, y: 0, width: 32, height: 32)
        closeButton.layer.cornerRadius = 16
        closeButton.layer.masksToBounds = true;
        closeButton.addTarget(self, action: #selector(buttonAction), for: .touchUpInside)
        self.view.addSubview(closeButton)
        
        self.closeButton.translatesAutoresizingMaskIntoConstraints = false
        self.closeButton.topAnchor.constraint(equalTo: self.view.safeAreaLayoutGuide.topAnchor, constant: +18).isActive = true
        self.closeButton.rightAnchor.constraint(equalTo: self.view.safeAreaLayoutGuide.rightAnchor, constant: -18).isActive = true
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated);
        
        closeButton.alpha = 0
        UIView.animate(withDuration: 1.0, delay: 3.0, animations: {
            self.closeButton.alpha = 1.0
        })

    }
    
    @objc func buttonAction(sender: UIButton!) {
        NotificationCenter.default.post(name: Notification.Name(rawValue: "closeguide"), object: nil)
    }

    func configurePageControl() {
        self.pageControl.frame = CGRect()
        
        self.pageControl.currentPageIndicatorTintColor = UIColor { traits in
            traits.userInterfaceStyle == .dark ? .white : UIColor.black
        }
    
        self.pageControl.pageIndicatorTintColor = UIColor { traits in
            traits.userInterfaceStyle == .dark ? .systemGray : UIColor.lightGray
        }
        
        self.pageControl.numberOfPages = orderedViewControllers.count
        self.pageControl.currentPage = 0
        self.pageControl.addTarget(self, action: #selector(pageControlHandle), for: .valueChanged)
        self.view.addSubview(self.pageControl)

        self.pageControl.translatesAutoresizingMaskIntoConstraints = false
        self.pageControl.bottomAnchor.constraint(equalTo: self.view.bottomAnchor, constant: -25).isActive = true
        self.pageControl.widthAnchor.constraint(equalTo: self.view.widthAnchor, constant: -20).isActive = true
        self.pageControl.heightAnchor.constraint(equalToConstant: 20).isActive = true
        self.pageControl.centerXAnchor.constraint(equalTo: self.view.centerXAnchor).isActive = true
    }
    
    func newVc(viewController: String) -> UIViewController {
        return UIStoryboard(name: "Walkthrough", bundle: nil).instantiateViewController(withIdentifier: viewController)
    }
    
    var currentIndex = 0

    // MARK: Delegate methords
    func pageViewController(_ pageViewController: UIPageViewController, didFinishAnimating finished: Bool, previousViewControllers: [UIViewController], transitionCompleted completed: Bool) {
        let pageContentViewController = pageViewController.viewControllers![0]
        self.pageControl.currentPage = orderedViewControllers.firstIndex(of: pageContentViewController)!
        currentIndex = self.pageControl.currentPage

        if(currentIndex == 5){
            closeButton.isHidden = true;
        } else {
            closeButton.isHidden = false;
        }
    }
    
    // MARK: Data source functions.
    func pageViewController(_ pageViewController: UIPageViewController, viewControllerBefore viewController: UIViewController) -> UIViewController? {
        guard let viewControllerIndex = orderedViewControllers.firstIndex(of: viewController) else {
            return nil
        }
        
        let previousIndex = viewControllerIndex - 1
        
        // User is on the first view controller and swiped left to loop to
        // the last view controller.
        guard previousIndex >= 0 else {
            //return orderedViewControllers.last
            // Uncommment the line below, remove the line above if you don't want the page control to loop.
            return nil
        }
        
        guard orderedViewControllers.count > previousIndex else {
            return nil
        }
        
        return orderedViewControllers[previousIndex]
    }
    
    func pageViewController(_ pageViewController: UIPageViewController, viewControllerAfter viewController: UIViewController) -> UIViewController? {
        guard let viewControllerIndex = orderedViewControllers.firstIndex(of: viewController) else {
            return nil
        }
        
        let nextIndex = viewControllerIndex + 1
        let orderedViewControllersCount = orderedViewControllers.count
        
        // User is on the last view controller and swiped right to loop to
        // the first view controller.
        guard orderedViewControllersCount != nextIndex else {
            //return orderedViewControllers.first
            // Uncommment the line below, remove the line above if you don't want the page control to loop.
            return nil
        }
        
        guard orderedViewControllersCount > nextIndex else {
            return nil
        }
        
        return orderedViewControllers[nextIndex]
    }
    
    @objc private func pageControlHandle(sender: UIPageControl){
        //print(sender.currentPage)
        let selectedPage = sender.currentPage
        setViewControllers([orderedViewControllers[selectedPage]], direction: .forward, animated: true, completion: nil)
    }
    
    override var supportedInterfaceOrientations: UIInterfaceOrientationMask {
        if UIDevice.current.userInterfaceIdiom == .phone {
            return [.portrait, .portraitUpsideDown]
        } else {
            return .all
        }
    }

    override var shouldAutorotate: Bool {
        return true
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
}
