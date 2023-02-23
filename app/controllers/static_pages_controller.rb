class StaticPagesController < ApplicationController
  def comingsoon
  end
  def signup

    sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])
    data = JSON.parse(%{{
      "contacts": [
        {
          "email": "#{params[:email]}"
        }
      ]
    }})

    response = sg.client.marketing.contacts.put(request_body: data)
    puts response.status_code
    puts response.headers
    puts response.body
    end

  private
  
end
