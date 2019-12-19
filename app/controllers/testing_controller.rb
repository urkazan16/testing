# require './test/Ruby_sel/runtest' 

class TestingController < ApplicationController

	# def initialize
	# 	# @items = Array.new
	# 	@articles = Article.new
	# end

def initialize
  @article = Article.new(article_params)

  if @article.save
    redirect_to @article
  else
    render 'new'
  end
end

private

  def article_params
    params.require(:article).permit(:title, :text)
  end


end
