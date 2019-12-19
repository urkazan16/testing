#!/usr/bin/env ruby

# require 'test_helper'

require "selenium-webdriver"
require "test/unit"
require_relative "Pages/LtTest"
 
class LoginClass < Test::Unit::TestCase

 $global_variable = "https://google.ru"
 

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
  end

  # def show
  #   @article = Article.find(params[:id])
  # end

  def teardown
    @driver.quit
  end


end