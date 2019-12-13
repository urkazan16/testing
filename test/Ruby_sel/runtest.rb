#!/usr/bin/env ruby
require "rails"
require "selenium-webdriver"
require "test/unit"
require_relative "Pages/LtTest"



class Runtest < Test::Unit::TestCase

 
include LtTest

  def setup

    Selenium::WebDriver::Chrome.driver_path = "/usr/local/bin/chromedriver"
    options = Selenium::WebDriver::Chrome::Options.new
    # options.add_argument('--headless')
    options.add_argument('--ignore-certificate-errors')
    options.add_argument('--disable-popup-blocking')
    options.add_argument('--disable-translate')
    options.add_argument('/usr/bin/google-chrome')
    @driver = Selenium::WebDriver.for :chrome, options: options


  end
 
  def starts
    # @logintest = LogintTest.new('test')
    # @logintest.test_login
    # @logintest.add_content
  end


  def teardown
    @driver.quit
  end



end