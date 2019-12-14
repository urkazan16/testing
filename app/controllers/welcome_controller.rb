class WelcomeController < ApplicationController

  def index
    @articles = Article.all

    # @word = "shit"
  end


  # def something
  # 	@word = "shit"
  # end

  # def index

  # end

  # def button

  #   puts "hi there +++++++++++++++++++++++++++"

  # # fork { exec ('ruby ./test/Ruby_sel/runtest.rb')}

  # end


end