#!/usr/bin/env ruby testing

# require "rails"
# require 'runtest' 


class TestingController < ApplicationController
  def index
  	# puts "hello"
  	fork { exec ('npm test')}

  end
end
